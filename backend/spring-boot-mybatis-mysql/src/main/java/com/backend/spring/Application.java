package com.backend.springBootMybatisMysql;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;

@SpringBootApplication
public class Application implements CommandLineRunner {
    public static void main(String[] args) {
      SpringApplication.run(Application.class, args);
    }

    public void run(String... args) {
      System.out.println("http://localhost:2000");
    }
}
