package com.backend.springBootMybatisMysql.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.annotations.Delete;

import com.backend.springBootMybatisMysql.entity.User;

@Mapper
public interface UserMapper {
  @Select("select id, name from users")
  ArrayList<User> selectAll();

  @Select("select id, name from users where id = #{id}")
  User selectById(@Param("id") Integer id);

  @Insert("insert users(id, name) values(#{id}, #{name})")
  int insert(@Param("id") Integer id, @Param("name") String name);

  @Update("update users set name = #{name} where id = #{id}")
  int update(@Param("id") Integer id, @Param("name") String name);

  @Delete("delete from users where id = #{id}")
  int delete(@Param("id") Integer id);
}
