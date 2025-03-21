package com.EverTea.EverTea.Authentication.repo;

import com.EverTea.EverTea.Authentication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
    User findByEmail(String email);
    List<User> findAll();
    void deleteById(int id);
}
