package com.exam.service;

import java.util.Set;

import com.exam.model.User;
import com.exam.model.UserRole;

public interface UserService {

	// creating user
	
	public User createUser(User user,Set<UserRole> userRoles) throws Exception ;       //
	
	// get user by username
	public User getUser(String username);

	public Boolean existsByUsername(String username);

	public Boolean existsByEmail(String email);

	public Boolean updatePassword(String username, String newPassword);
	
	// delete used by id
	public void deleteUser(Long userId);
}
