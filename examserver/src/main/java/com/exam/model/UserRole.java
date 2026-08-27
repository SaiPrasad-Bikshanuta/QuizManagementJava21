package com.exam.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

;

@Entity
public class UserRole {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private  Long userRoleId;
	
	// user
	@ManyToOne(fetch=FetchType.EAGER)  //when we retrive userRole to pta chalega ki kis user ka hai
	private User user;
	
	
	@ManyToOne                                          // indirectly user and role mai many to many relation ship ati hai
	private Role  role;


	public UserRole() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Long getUserRoleId() {
		return userRoleId;
	}


	public void setUserRoleId(Long userRoleId) {
		this.userRoleId = userRoleId;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public Role getRole() {
		return role;
	}


	public void setRole(Role role) {
		this.role = role;
	}
	
	

}
