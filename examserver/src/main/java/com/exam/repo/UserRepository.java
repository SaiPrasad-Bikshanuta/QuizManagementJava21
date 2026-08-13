package com.exam.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
public User findByUsername(String username);       // findByUsername: write the properties as it is and use camelcase convention

public Boolean existsByUsername(String username);  // check if user exists or not

public Boolean existsByEmail(String email);

//public Boolean updatePassword(String username,String password);

}
