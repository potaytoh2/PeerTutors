Use peer_tutor;

-- Insert data into the 'institute' table
INSERT INTO institute (id, name, created_by)
VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d422', 'Singapore Management University', 'f47ac10b-58cc-4372-a567-0e02b2c3d479');

-- Create Mock admin
INSERT INTO user (id, email, name, gender, account_type, institute_id, created_by)
VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d412', 'mockAdmin@example.com', 'Mock Admin', 'male', 'admin', (SELECT id FROM institute WHERE name = 'Singapore Management University'), 'f47ac10b-58cc-4372-a567-0e02b2c3d479');
INSERT INTO institute_admin (id,user_id, created_by)
VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d448',(SELECT id FROM user WHERE name = 'Mock Admin'), 'f47ac10b-58cc-4372-a567-0e02b2c3d479');
-- Create Mock student
INSERT INTO user (id, email, name, gender, account_type, institute_id, created_by)
VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d413', 'mockStudent@example.com', 'Mock Student', 'male', 'student', (SELECT id FROM institute WHERE name = 'Singapore Management University'), 'f47ac10b-58cc-4372-a567-0e02b2c3d479');

-- Insert mock data into the 'student' table
INSERT INTO student (id,user_id, student_rating, created_by)
VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d414',(SELECT id FROM user WHERE name = 'Mock Student'), 4.5, 'f47ac10b-58cc-4372-a567-0e02b2c3d479');

-- Create Mock tutor
INSERT INTO user (id,email, name, gender, account_type, institute_id, created_by)
VALUES (
  'f47ac10b-58cc-4372-a567-0e02b2c3d415',
  'mockTutor@example.com',
  'Mock Tutor',
  'female',
  'both',
  (SELECT id FROM institute WHERE name = 'Singapore Management University'),
  'f47ac10b-58cc-4372-a567-0e02b2c3d479'
);



-- Insert mock data into the 'tutor' table
INSERT INTO tutor (id, user_id, tutor_rating, tutor_tier, is_verified, created_by)
VALUES (
  'f47ac10b-58cc-4372-a567-0e02b2c3d416',
  (SELECT id FROM user WHERE name = 'Mock Tutor'),
  4.8,
  'gold',
  true,
  'f47ac10b-58cc-4372-a567-0e02b2c3d479'
);


-- Insert mock data into the 'tutor_wallet' table
INSERT INTO tutor_wallet (id,tutor_id, amount, created_by)
VALUES (
  'f47ac10b-58cc-4372-a567-0e02b2c3d417',
  (SELECT id FROM tutor WHERE id = 'f47ac10b-58cc-4372-a567-0e02b2c3d416'),
  500.00,
  'f47ac10b-58cc-4372-a567-0e02b2c3d479'
);

-- Update tutor table with wallet_id
UPDATE tutor
SET wallet_id = 'f47ac10b-58cc-4372-a567-0e02b2c3d417'
WHERE user_id = (SELECT id FROM user WHERE name = 'Mock Tutor');


-- Create Mock Modules
INSERT INTO module (id,module_code, name, base_pay, created_by)
VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d418','IS111', 'Introduction to Programming', 15.0, 'f47ac10b-58cc-4372-a567-0e02b2c3d479');

INSERT INTO module (id,module_code, name, base_pay, created_by)
VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d419','IS110', 'Information Systems and Innovation', 10.0, 'f47ac10b-58cc-4372-a567-0e02b2c3d479');

INSERT INTO module (id,module_code, name, base_pay, created_by)
VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d420','IS113', 'Web App Development 1', 20.0, 'f47ac10b-58cc-4372-a567-0e02b2c3d479');

INSERT INTO module (id,module_code, name, base_pay, created_by)
VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d421','IS112', 'Data Management', 20.0, 'f47ac10b-58cc-4372-a567-0e02b2c3d479');



-- Create Mock Tutor Modules
INSERT INTO tutor_modules (id,tutor_id, module_id, created_by)
VALUES
  ('f47ac10b-58cc-4372-a567-0e02b2c3d422','f47ac10b-58cc-4372-a567-0e02b2c3d416',(SELECT id FROM module WHERE name = 'Introduction to Programming') , 'f47ac10b-58cc-4372-a567-0e02b2c3d479'),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d423','f47ac10b-58cc-4372-a567-0e02b2c3d416',(SELECT id FROM module WHERE name = 'Web App Development 1') , 'f47ac10b-58cc-4372-a567-0e02b2c3d479'),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d424','f47ac10b-58cc-4372-a567-0e02b2c3d416',(SELECT id FROM module WHERE name = 'Data Management') , 'f47ac10b-58cc-4372-a567-0e02b2c3d479'),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d425','f47ac10b-58cc-4372-a567-0e02b2c3d416',(SELECT id FROM module WHERE name = 'Information Systems and Innovation') , 'f47ac10b-58cc-4372-a567-0e02b2c3d479');

-- Insert mock data into student_module
INSERT INTO student_modules (id,student_id, module_id, created_by)
VALUES
  ('f47ac10b-58cc-4372-a567-0e02b2c3d426','f47ac10b-58cc-4372-a567-0e02b2c3d414', (SELECT id FROM module WHERE module_code = 'IS111'), 'f47ac10b-58cc-4372-a567-0e02b2c3d479'),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d427','f47ac10b-58cc-4372-a567-0e02b2c3d414', (SELECT id FROM module WHERE module_code = 'IS113'), 'f47ac10b-58cc-4372-a567-0e02b2c3d479'),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d428','f47ac10b-58cc-4372-a567-0e02b2c3d414', (SELECT id FROM module WHERE module_code = 'IS112'), 'f47ac10b-58cc-4372-a567-0e02b2c3d479');

-- Insert mock data into tutor_schedule table
INSERT INTO tutor_schedule (id, available_date, tutor_id, created_by, updated_by)
VALUES
  ('f47ac10b-58cc-4372-a567-0e02b2c3d430','2023-09-01', 'f47ac10b-58cc-4372-a567-0e02b2c3d416', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d431','2023-09-02', 'f47ac10b-58cc-4372-a567-0e02b2c3d416', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d432','2023-09-03', 'f47ac10b-58cc-4372-a567-0e02b2c3d416', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d433','2023-09-04', 'f47ac10b-58cc-4372-a567-0e02b2c3d416', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d434','2023-09-05', 'f47ac10b-58cc-4372-a567-0e02b2c3d416', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d435','2023-09-06', 'f47ac10b-58cc-4372-a567-0e02b2c3d416', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d436','2023-09-07', 'f47ac10b-58cc-4372-a567-0e02b2c3d416', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d437','2023-09-08', 'f47ac10b-58cc-4372-a567-0e02b2c3d416', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d438','2023-09-09', 'f47ac10b-58cc-4372-a567-0e02b2c3d416', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d439','2023-09-10', 'f47ac10b-58cc-4372-a567-0e02b2c3d416', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL);

-- Insert 10 rows of mock data into tutoring_request table


-- Insert 10 rows of mock data into tutoring_request table
INSERT INTO tutoring_request (id,date, tutor_id, student_id, module_id, isAccepted, created_by, updated_by)
VALUES
  ('f47ac10b-58cc-4372-a567-0e02b2c3d439','2023-09-01', 'f47ac10b-58cc-4372-a567-0e02b2c3d416', 'f47ac10b-58cc-4372-a567-0e02b2c3d414', (SELECT id FROM module WHERE name = 'Introduction to Programming'), true, 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d440','2023-09-08', 'f47ac10b-58cc-4372-a567-0e02b2c3d416', 'f47ac10b-58cc-4372-a567-0e02b2c3d414', (SELECT id FROM module WHERE name = 'Introduction to Programming'), false, 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d441','2023-09-07', 'f47ac10b-58cc-4372-a567-0e02b2c3d416', 'f47ac10b-58cc-4372-a567-0e02b2c3d414', (SELECT id FROM module WHERE name = 'Web App Development 1'), true, 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d442','2023-09-05', 'f47ac10b-58cc-4372-a567-0e02b2c3d416', 'f47ac10b-58cc-4372-a567-0e02b2c3d414', (SELECT id FROM module WHERE name = 'Web App Development 1'), false, 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL);
 


-- Insert 10 rows of mock data into transaction table
INSERT INTO transaction (id,tutor_id, student_id, module_id, request_id, amount, isVerified, verification_comments, created_by, updated_by)
VALUES
  ('f47ac10b-58cc-4372-a567-0e02b2c3d443','f47ac10b-58cc-4372-a567-0e02b2c3d416', 'f47ac10b-58cc-4372-a567-0e02b2c3d414', (SELECT id FROM module WHERE name = 'Introduction to Programming'), 'f47ac10b-58cc-4372-a567-0e02b2c3d439', 15.0, true, 'Payment verified', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d444','f47ac10b-58cc-4372-a567-0e02b2c3d416', 'f47ac10b-58cc-4372-a567-0e02b2c3d414', (SELECT id FROM module WHERE name = 'Web App Development 1'), 'f47ac10b-58cc-4372-a567-0e02b2c3d441',  20.0, false, 'Fail Verification', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL);

-- Insert 10 rows of mock data into wallet_transaction table
INSERT INTO wallet_transaction (id,wallet_id, transaction_id, amount, created_by, updated_by) 
VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d445','f47ac10b-58cc-4372-a567-0e02b2c3d417', 'f47ac10b-58cc-4372-a567-0e02b2c3d443', 15.0, 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL);


-- Insert 10 rows of mock data into review table
INSERT INTO review (id,transaction_id, student_id, tutor_id, rating, review, created_by, updated_by)
VALUES
  ('f47ac10b-58cc-4372-a567-0e02b2c3d446','f47ac10b-58cc-4372-a567-0e02b2c3d443', 'f47ac10b-58cc-4372-a567-0e02b2c3d414', 'f47ac10b-58cc-4372-a567-0e02b2c3d416', 4.5, 'Great tutor!', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d447','f47ac10b-58cc-4372-a567-0e02b2c3d444', 'f47ac10b-58cc-4372-a567-0e02b2c3d414', 'f47ac10b-58cc-4372-a567-0e02b2c3d416', 4.5, 'Great tutor!', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', NULL);