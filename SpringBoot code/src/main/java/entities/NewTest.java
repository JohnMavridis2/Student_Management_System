package com.example.demo.entities;

import java.sql.Date;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewTest {
	
	private String username;
	private String test;
	private Date timeStamp;
	private float grade;

}
