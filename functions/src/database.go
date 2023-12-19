package main

import (
	"database/sql"
	"log"
)

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

func select_allFeedback() ([]Feedback, error) {
	db, err := databaseConnector()
	if err != nil {
		return nil, err
	}

	sql := "SELECT comment,email,source,createdAt,updatedAt from feedback_Table"

	rows, err := db.Query(sql)

	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var feedbackList []Feedback

	for rows.Next() {
		var f Feedback
		err := rows.Scan(&f.Comment, &f.Email, &f.Source, &f.CreatedAt, &f.UpdatedAt)
		if err != nil {
			log.Fatalf("error occured while scaning rows %v", err)
			return nil, err
		}
		log.Println(f)
		feedbackList = append(feedbackList, f)
	}

	return feedbackList, nil
}

func retrieve_ListOfEpisode_Vartalaap() ([]VartalaapIndex, error) {
	db, err := databaseConnector()
	if err != nil {
		return nil, err
	}

	sql := "select serialNo,title,episodeId from vartalaap_Table orderby order by pK desc"

	rows, err := db.Query(sql)

	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var vList []VartalaapIndex

	for rows.Next() {
		var v VartalaapIndex
		err := rows.Scan(&v.SerialNo, &v.Name, &v.EpisodeId)
		if err != nil {
			log.Fatalf("error occured while scaning rows %v", err)
			return nil, err
		}

		vList = append(vList, v)
	}

	return vList, nil
}
