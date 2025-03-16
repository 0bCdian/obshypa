package main

import (
	"flag"
	"fmt"
	"os"
)

type MissingArgError struct {
	Context string
}

type EnoentError struct {
	Context  string
	Filepath string
}

func (err *MissingArgError) Error() string {
	return fmt.Sprintf("not enough args were passed %s", err.Context)
}

func (err *EnoentError) Error() string {
	return fmt.Sprintf("file %s does not exist\n%s", err.Filepath, err.Context)
}

type Args struct {
	manaboxCsv string
	isProd     bool
}

func ParseArgs() (*Args, error) {
	isProd := flag.Bool("prod", false, "Use production mode (Firestore)")

	flag.Parse()

	if *isProd {
		return &Args{
			manaboxCsv: "",
			isProd:     true,
		}, nil
	}

	remainingArgs := flag.Args()
	if len(remainingArgs) < 1 {
		return nil, &MissingArgError{Context: "ParseArgs"}
	}

	manaboxCsvFilePath := remainingArgs[0]
	if !fileExists(manaboxCsvFilePath) {
		return nil, &EnoentError{Filepath: manaboxCsvFilePath, Context: "ParseArgs"}
	}

	return &Args{
		manaboxCsv: manaboxCsvFilePath,
		isProd:     false,
	}, nil
}

func fileExists(filename string) bool {
	info, err := os.Stat(filename)
	if os.IsNotExist(err) {
		return false
	}
	return !info.IsDir()
}
