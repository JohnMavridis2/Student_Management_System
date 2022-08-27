package com.example.demo.entities;

import java.io.Serializable;
import java.util.Objects;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentIdAndTestId implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private int student_id;
    private int test_id;
    
}



