CREATE TABLE vartalaap_Table (
    pK integer NOT NULL AUTO_INCREMENT,
    serialNo varchar(100) NOT NULL,
    title varchar(255) NOT NULL,
    episodeId varchar(100) NOT NULL,
    metadata JSON,
    createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
    updatedAt timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (pK)
);
CREATE TABLE feedback_Table (
    pK integer NOT NULL AUTO_INCREMENT,
    email varchar(255),
    comment text NOT NULL,
    source varchar(255) NOT NULL,
    createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
    updatedAt timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (pK)
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
END


INSERT INTO vartalaap_Table(serialNo,title,episodeId)
VALUES ("vartalaap00","Welcome to Vartalaap 👋🏻","Vartalaap#0"),
 ("vartalaap01","But Why Though ¿","Vartalaap#1"),
 ("vartalaap02","That one burnout story 🕯","Vartalaap#2");
