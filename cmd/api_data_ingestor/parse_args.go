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

func ParseFileArg() (string, error) {
	if len(os.Args) < 2 {
		return "", &MissingArgError{Context: "ParseFileArg"}
	}
	fileLocation := os.Args[1]
	if !fileExists(fileLocation) {
		return "", &EnoentEror{Filepath: fileLocation, Context: "ParseFileArg"}
	}
	return fileLocation, nil
}

func fileExists(filename string) bool {
	info, err := os.Stat(filename)
	if os.IsNotExist(err) {
		return false
	}
	return !info.IsDir()
}
