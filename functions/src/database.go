package main

import "database/sql"

func add_feedback(feed Feedback) (sql.Result, error) {
	db, err := databaseConnector()
	if err != nil {
		return nil, err
	}
	sql := "INSERT INTO feedback_Table(comment,email,source) values(?,?,?)"

	result, err := db.Exec(sql, feed.Comment, feed.Email, feed.Source)

	if err != nil {
		return nil, err
	}

	return result, nil
}
