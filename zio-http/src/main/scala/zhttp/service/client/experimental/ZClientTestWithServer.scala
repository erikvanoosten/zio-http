package zhttp.service.client.experimental

import zhttp.http.URL.Location
import zhttp.http._
import zhttp.service.server.ServerChannelFactory
import zhttp.service.{EventLoopGroup, Server}
import zio.{App, ExitCode, URIO, ZIO}

/**
 * Self contained ZClient demo with server.
 */
object ZClientTestWithServer extends App {

  private val PORT = 8081

  private val fooBar: HttpApp[Any, Nothing] = Http.collect[Request] {
    case Method.GET -> !! / "foo" / int(id) => Response.text("bar ----- " + id)
    case Method.GET -> !! / "bar" / int(id) => Response.text("foo foo foo foo foo foo foo foo foo  " + id)
  }

  private val server =
    Server.port(PORT) ++                     // Setup port
      Server.paranoidLeakDetection ++        // Paranoid leak detection (affects performance)
      Server.app(fooBar) ++ Server.keepAlive // Setup the Http app

  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] = {
    server.make.use { start =>
      println(s"Server started on port ${start.port}")
      clientTest(start.port) *> ZIO.never
    }
      .provideCustomLayer(ServerChannelFactory.auto ++ EventLoopGroup.auto(2))
      .exitCode
  }

  def clientTest(port: Int) = {
    val client                                   = ZClient.port(port) ++ ZClient.threads(2)
    val emptyHeaders                             = Headers.empty
    def req(i: Int, fooOrBar: String): ReqParams = ReqParams(
      Method.GET,
      URL(!! / fooOrBar / i.toString, Location.Absolute(Scheme.HTTP, "localhost", port)),
      emptyHeaders,
      HttpData.empty,
    )
    for {
      cl <- client.make
//      res1 <- cl.run("")
      _  <- triggerClientMultipleTimes(cl, req)
    } yield ()

  }

  // multiple client shared resources
  // different conn pool for diff host port
  // pool should correspond to host / port combo
  // have one client and
  // optimizations in the background
  // just one client serves all and sundry

  // use cases like pipelining ... httpclient document

  def triggerClientMultipleTimes(cl: DefaultZClient, f: (Int, String) => ReqParams) = for {
    //    resp    <- cl.run(r1)
    resp <- cl.run(f(1, "foo"))
    rval <- resp.getBodyAsString
    _    <- ZIO.effect(println(s"GOT RESPONSE NUMBER 1: $rval"))
    _    <- ZIO.effect {
      println(s"\n ======= NOW SLEEPING for 3000 ======== ms \n")
//      Thread.sleep(5000)
    }
//
//    resp2 <- cl.run(f(2, "bar"))
//    //    resp2 <- cl.run("http://sports.api.decathlon.com/groups/water-aerobics")
//    r2    <- resp2.getBodyAsString
//    _     <- ZIO.effect(println(s"GOT RESPONSE NUMBER 2 : $r2"))

    _ <- ZIO.effect { println(s"\n ======= EXECUTING THIRD REQ ======== ms \n") }

    resp3 <- cl.run("http://www.google.com")
//    resp3 <- cl.run("http://sports.api.decathlon.com/groups/water-aerobics")
    r3    <- resp3.getBodyAsString
    _     <- ZIO.effect(println(s"GOT RESPONSE NUMBER 3 : $r3"))

    resp2 <- cl.run(f(2, "bar"))
    //    resp2 <- cl.run("http://sports.api.decathlon.com/groups/water-aerobics")
    r2    <- resp2.getBodyAsString
    _     <- ZIO.effect(println(s"GOT RESPONSE NUMBER 2 : $r2"))

    _ = f(1, "foo")
    //    req3 = ReqParams(
//               Method.GET,
//               URL(!! / "random" , Location.Absolute(Scheme.HTTP, "localhost", 8082)),
//                Headers.empty,
//               HttpData.empty,
//               )
//
//    resp3 <- cl.run(req3)
//    r3 <- resp3.getBodyAsString
//    _ <- ZIO.effect(println(s"GOT RESPONSE NUMBER 3 : $r3"))

//
//    //    resp <- cl.run("http://sports.api.decathlon.com/groups/water-aerobics")
//    resp <- cl.run(req2)
//    r2   <- ZIO.effect(resp.status)
//    _    <- ZIO.effect(println(s"R!!!: $r2"))
//    _ <- ZIO.effect(Thread.sleep(2000))
//    resp <- cl.run("http://sports.api.decathlon.com/groups/water-aerobics")
//    _ <- resp.getBodyAsString

//    _ <- ZIO.effect(println(s"GOT ANOTHER RESP USING SAME CONNECTION ${result2}"))
  } yield ()

}
