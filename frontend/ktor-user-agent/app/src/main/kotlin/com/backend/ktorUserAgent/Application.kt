package com.backend.ktorUserAgent

import io.ktor.server.engine.*
import io.ktor.server.netty.*

import io.ktor.features.*
import io.ktor.gson.*
import io.ktor.application.*

import com.backend.ktorUserAgent.routes.*

fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

fun Application.feature() {
  install(HSTS)
  install(Compression)
  install(CallLogging)
  install(DefaultHeaders)
  install(ConditionalHeaders)
  install(ContentNegotiation) {
    gson ()
  }
}

fun Application.routing() {
  userAgentDeliver()
}
