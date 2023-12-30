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

func retrieve_ListOfEpisode_Audio() ([]AudioIndex, error) {
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

	var vList []AudioIndex

	for rows.Next() {
		var v AudioIndex
		err := rows.Scan(&v.SerialNo, &v.Name, &v.EpisodeId)
		if err != nil {
			log.Fatalf("error occured while scaning rows %v", err)
			return nil, err
		}

		vList = append(vList, v)
	}

	return vList, nil
}

func add_audio_metadata(aud AudioIndex) (sql.Result, error) {
	db, err := databaseConnector()
	if err != nil {
		return nil, err
	}
	sql := "INSERT INTO blogs_Table(title,serialNo,episodeId) values(?,?,?)"

	result, err := db.Exec(sql, aud.Name, aud.SerialNo, aud.EpisodeId)

	if err != nil {
		return nil, err
	}

	return result, nil
}

func add_blog_metadata(blog Blogs) (sql.Result, error) {
	db, err := databaseConnector()
	if err != nil {
		return nil, err
	}
	sql := "INSERT INTO blogs_Table(title,author,date,link) values(?,?,?,?)"

	result, err := db.Exec(sql, blog.Title, blog.Author, blog.Date, blog.Link)

	if err != nil {
		return nil, err
	}

	return result, nil
}
