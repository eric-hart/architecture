package com.backend.ktorHttp

import io.ktor.features.*
import io.ktor.gson.*

import io.ktor.application.*

import com.backend.ktorHttp.routes.*

fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

fun Application.feature() {
  install(HSTS)
  install(CallLogging)
  install(AutoHeadResponse)
  install(CachingHeaders)
  install(ConditionalHeaders)
  install(Compression)
  install(PartialContent)
  install(DataConversion)
  install(DefaultHeaders)
  install(ContentNegotiation) {
    gson ()
  }
}

fun Application.routing() {
  restApiRoute()
}
