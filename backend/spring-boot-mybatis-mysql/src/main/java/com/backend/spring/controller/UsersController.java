package com.backend.springBootMybatisMysql.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.springBootMybatisMysql.entity.User;
import com.backend.springBootMybatisMysql.mapper.UserMapper;

@RestController
public class UsersController {
  @Autowired
  private UserMapper users;

  @GetMapping("/api/users")
  public ArrayList<User> all() {
    return this.users.selectAll();
  }

  @GetMapping("/api/users/{id}")
  public User one(@PathVariable Integer id) {
    return this.users.selectById(id);
  }

  @PostMapping("/api/users")
  public User post(@RequestBody User newUser) {
    this.users.update(newUser.getId(), newUser.getName());
    return newUser;
  }

  @PutMapping("/api/users")
  public User put(@RequestBody User newUser) {
    this.users.insert(newUser.getId(), newUser.getName());
    return newUser;
  }

  @DeleteMapping("/api/users/{id}")
  public void delete(@PathVariable Integer id) {
    this.users.delete(id);
  }
}
