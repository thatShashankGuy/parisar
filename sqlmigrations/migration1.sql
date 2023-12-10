CREATE TABLE vartalaap_Table(
    pK integer not null AUTO_INCREMENT ,
    serialNo varchar (100) not null,
    title varchar(255) not null,
    episodId varchar(100) not null,
    metadata JSON,
    PRIMARY KEY(pK)
);

CREATE TABLE feedback_Table(
        pK integer not null AUTO_INCREMENT ,
        email varchar(255),
        comment text not null,
        source varchar(255) not null,
        PRIMARY KEY(pK)
);

DELIMITER //

CREATE PROCEDURE IF NOT EXISTS add_vartalaap_data(
    IN serialNo varchar(100),
    IN title varchar(255),
    IN episodId varchar(100),
    IN metadata JSON
) 
BEGIN
    INSERT INTO vartalaap_Table(serialNo, title, episodId, metadata)
    VALUES (serialNo, title, episodId, metadata);
END //

DELIMITER ;
DELIMITER //
CREATE PROCEDURE IF NOT EXISTS add_feedback_data(
    IN email varchar(255),
    IN comment text,
    IN source varchar(255)
)
BEGIN 
INSERT INTO feedback_Table(email,comment,source)
values(email,comment,source)
END//
DELIMITER ;