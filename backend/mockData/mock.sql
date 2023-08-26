Use peer_tutor


-- Insert data into the 'institute' table
INSERT INTO institute (id,name, created_by)
VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d422','Singapore Management University', 'f47ac10b-58cc-4372-a567-0e02b2c3d479');

-- Create Mock admin
INSERT INTO user (id,email, name, gender, account_type, institute_id, created_by)
VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d412','mockAdmin@example.com', 'Mock Admin', 'male', 'admin', (SELECT id FROM institute WHERE name = 'Singapore Management University'), 'f47ac10b-58cc-4372-a567-0e02b2c3d479');
-- Create Mock student
INSERT INTO user (id,email, name, gender, account_type, institute_id, created_by)
VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d413','mockStudent@example.com', 'Mock Student', 'male', 'student', (SELECT id FROM institute WHERE name = 'Singapore Management University'), 'f47ac10b-58cc-4372-a567-0e02b2c3d479');
-- Insert mock data into the 'student' table
INSERT INTO student (user_id, student_rating, created_by)
VALUES
  ((SELECT id FROM user WHERE name = 'Mock Student'), 4.5, 'f47ac10b-58cc-4372-a567-0e02b2c3d479'),

-- Create Mock tutor
INSERT INTO user (email, name, gender, account_type, institute_id, created_by)
VALUES (
  'mockTutor@example.com',
  'Mock Tutor',
  'female',
  'both',
  (SELECT id FROM institute WHERE name = 'Singapore Management University'),
  'f47ac10b-58cc-4372-a567-0e02b2c3d479'
);


-- Insert mock data into the 'tutor' table
INSERT INTO tutor (user_id, tutor_rating, tutor_tier, is_verified, created_by)
VALUES
  ((SELECT id FROM user WHERE name = 'Mock Tutor'), 4.8, 'gold', true, 'f47ac10b-58cc-4372-a567-0e02b2c3d479'),

-- Insert mock data into the 'tutor_wallet' table
WITH inserted_wallet AS (
  INSERT INTO tutor_wallet (tutor_id, amount, created_by)
  VALUES ((SELECT id FROM user WHERE name = 'Mock Tutor'), 500.00, 'f47ac10b-58cc-4372-a567-0e02b2c3d479')
  RETURNING id
)
UPDATE tutor
SET wallet_id = (SELECT id FROM inserted_wallet)
WHERE id = (SELECT tutor_id FROM inserted_wallet);

-- Create Mock Modules
INSERT INTO module (module_code, name, base_pay, created_by)
VALUES ('IS111', 'Introduction to Programming', 15.0, 'f47ac10b-58cc-4372-a567-0e02b2c3d479');

INSERT INTO module (module_code, name, base_pay, created_by)
VALUES ('IS110', 'Information Systems and Innovation', 10.0, 'f47ac10b-58cc-4372-a567-0e02b2c3d479');

INSERT INTO module (module_code, name, base_pay, created_by)
VALUES ('IS113', 'Web App Development 1', 20.0, 'f47ac10b-58cc-4372-a567-0e02b2c3d479');

INSERT INTO module (module_code, name, base_pay, created_by)
VALUES ('IS112', 'Data Management', 20.0, 'f47ac10b-58cc-4372-a567-0e02b2c3d479');


-- Create Mock Tutor Modules
INSERT INTO tutor_modules (tutor_id, module_id, created_by)
VALUES
  ((SELECT id FROM user WHERE name = 'Mock Tutor'),(SELECT id FROM module WHERE name = 'Introduction to Programming') , 'f47ac10b-58cc-4372-a567-0e02b2c3d479'),
  ((SELECT id FROM user WHERE name = 'Mock Tutor'),(SELECT id FROM module WHERE name = 'Web App Development 1') , 'f47ac10b-58cc-4372-a567-0e02b2c3d479'),
  ((SELECT id FROM user WHERE name = 'Mock Tutor'),(SELECT id FROM module WHERE name = 'Data Management') , 'f47ac10b-58cc-4372-a567-0e02b2c3d479'),
  ((SELECT id FROM user WHERE name = 'Mock Tutor'),(SELECT id FROM module WHERE name = 'Information Systems and Innovation') , 'f47ac10b-58cc-4372-a567-0e02b2c3d479'),

-- You can continue adding more INSERT statements for additional mock data


