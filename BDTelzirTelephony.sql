CREATE DATABASE IF NOT EXISTS telephony;

USE telephony;

CREATE TABLE DDD (
	id_DDD INT PRIMARY KEY AUTO_INCREMENT,
    code_DDD INT NOT NULL
);

INSERT INTO DDD (code_DDD) VALUES
(11),
(16),
(17),
(18);

CREATE TABLE plans (
	id_plan INT PRIMARY KEY AUTO_INCREMENT,
    plan_name VARCHAR(50) NOT NULL,
    minutes_free INT NOT NULL
);

INSERT INTO plans (plan_name, minutes_free) VALUES
('FaleMais30', 30),
('FaleMais60', 60),
('FaleMais120', 120);

CREATE TABLE fixed_price (
	id_call_fixed INT PRIMARY KEY AUTO_INCREMENT,
    origin_id_DDD INT NOT NULL,
    destination_id_DDD INT NOT NULL,
    min_value_fixed DECIMAL(3,2) NOT NULL,
    min_value_mais DECIMAL(3,2) NOT NULL,
    FOREIGN KEY (origin_id_DDD) REFERENCES DDD (id_DDD),
    FOREIGN KEY (destination_id_DDD) REFERENCES DDD (id_DDD)
);
INSERT INTO fixed_price
(origin_id_DDD, destination_id_DDD, min_value_fixed, min_value_mais) VALUES
(1, 2, 1.90, 2.09),
(2, 1, 2.90, 3.19),
(1, 3, 1.70, 1.87),
(3, 1, 2.70, 2.97),
(1, 4, 0.90, 0.99),
(4, 1, 1.90, 2.09); 
