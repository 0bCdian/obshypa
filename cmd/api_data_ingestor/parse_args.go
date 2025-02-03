package main

import (
	"fmt"
	"os"
)

type MissingArgError struct {
	Context string
}

type EnoentEror struct {
	Context  string
	Filepath string
}

func (err *MissingArgError) Error() string {
	return fmt.Sprintf("not enough args where passed %s", err.Context)
}

func (err *EnoentEror) Error() string {
	return fmt.Sprintf("file %s does not exist\n%s", err.Filepath, err.Context)
}

type Args struct {
	manaboxCsv string
}

func ParseFileArg() (*Args, error) {
	if len(os.Args) < 2 {
		return nil, &MissingArgError{Context: "ParseFileArg"}
	}
	manaboxCsvFilePath := os.Args[1]
	if !fileExists(manaboxCsvFilePath) {
		return nil, &EnoentEror{Filepath: manaboxCsvFilePath, Context: "ParseFileArg"}
	}
	return &Args{manaboxCsv: manaboxCsvFilePath}, nil
}

func fileExists(filename string) bool {
	info, err := os.Stat(filename)
	if os.IsNotExist(err) {
		return false
	}
	return !info.IsDir()
}
