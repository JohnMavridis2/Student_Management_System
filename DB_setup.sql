/*create the database*/ 
CREATE DATABASE studentsMngSys;
USE studentsMngSys;

/*create the tables*/
CREATE TABLE students(
	id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(20),
    pass_word VARCHAR(20),
    average_grade DECIMAL(4,2)
);

CREATE TABLE tests(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20)
);

CREATE TABLE tests_done(
	student_id INT,
    test_id INT,
    grade DECIMAL(4,2),
    time_stamp DATE,
    PRIMARY KEY (student_id,test_id),
    FOREIGN KEY(student_id) REFERENCES students(id) ON DELETE CASCADE,
	FOREIGN KEY(test_id) REFERENCES tests(id)
);

/*populate the DB with some initial values*/

INSERT INTO students(username,pass_word,average_grade) VALUES ('john','john',0);
INSERT INTO students(username,pass_word,average_grade) VALUES ('maria','maria',0);

SELECT * FROM students;

INSERT INTO tests(name) VALUES ('A');
INSERT INTO tests(name) VALUES ('B');

SELECT * FROM tests;

INSERT INTO tests_done VALUES (1,1,12,'2022-08-20');
INSERT INTO tests_done VALUES (1,2,13,'2022-08-21');
INSERT INTO tests_done VALUES (2,1,18,'2022-08-20');
INSERT INTO tests_done VALUES (2,2,19,'2022-08-21');

SELECT * FROM tests_done;

DELIMITER $$
CREATE TRIGGER update_avg AFTER INSERT ON tests_done
FOR EACH ROW BEGIN  
	DECLARE old_avg_grade DECIMAL(4,2);
	DECLARE new_avg_grade DECIMAL(4,2);
        DECLARE n INT;
        
	SELECT average_grade INTO old_avg_grade FROM students WHERE id=NEW.student_id;
        SELECT COUNT(*) INTO n FROM tests_done WHERE student_id=NEW.student_id;
        SET new_avg_grade:= (NEW.grade + (n-1)*old_avg_grade)/n;
        UPDATE students SET average_grade=new_avg_grade WHERE id=NEW.student_id;
END $$
DELIMITER ;	

		
    
