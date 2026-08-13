package com.exam.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.helper.UserFoundException;
import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	
	@Autowired
	private UserService userService;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	// creating user                     // we can return direct  responsentity oruser
	@PostMapping("/")
	public User createUser(@RequestBody User user) throws Exception {
		
		user.setProfile("defualt.png");
		// encoding pssword with bcryptpasswordencoder
		user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
		
		
		Set<UserRole> roles=new HashSet<>();

		Role role=new Role();    
		role.setRoleId(45L);
		role.setRoleName("NORMAL");                    // we applied restriction jo bhi ayega vo normal user add hoga
		
		
		UserRole userRole=new UserRole();
		userRole.setUser(user);
		userRole.setRole(role);
		
		
		roles.add(userRole);
		
		return this.userService.createUser(user, roles);
			
	}
	
	
	// get the user
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username) {
		
		return this.userService.getUser(username);
	}
	@PostMapping("/getUserWith")
	public Boolean getUserWith(@RequestBody User userDetails) {

		if(this.userService.existsByUsername(userDetails.getUsername()) && (this.userService.existsByEmail(userDetails.getEmail()))){
			return true;
		}
		else{
			return false;
		}
	}

	@PutMapping("/resetPassword")
	public Boolean updatePassword(@RequestBody User userData){
		User user=this.userService.getUser(userData.getUsername());
		String pass=this.bCryptPasswordEncoder.encode(userData.getPassword());
		if(user!=null){
			this.userService.updatePassword(userData.getUsername(),pass );
			return true;
		}
		return false;
	}
	//delete user by id
	@DeleteMapping("/{userId}")
	public void deleteUser(@PathVariable("userId") Long userId) {
		this.userService.deleteUser(userId);
		
		
	}
	
	// update the user
	
	
	
	
	@ExceptionHandler(UserFoundException.class)
	public ResponseEntity<?> exceptionHandler(UserFoundException ex){
		return ResponseEntity.ok(ex.getMessage());
	}
	
	

}
