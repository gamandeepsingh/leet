/* eslint-disable no-unused-vars */
import conf from "../conf/conf";
import { Client, ID, Databases, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.databases = new Databases(this.client);
  }

  async addStudent({ studentName, studentUserName, userId }) {
    try {
      return await this.databases.createDocument(
        conf.databaseId,
        conf.studentId,
        studentUserName,
        {
          studentName,
          studentUserName,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: addStudent :: error ", error);
    }
  }

  async deleteStudent(studentUserName) {
    try {
      await this.databases.deleteDocument(
        conf.databaseId,
        conf.studentId,
        studentUserName
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteStudent :: error ", error);
      return false;
    }
  }

  async updateStudent(studentUserName, { studentName, newUserName, userId }) {
    try {
      this.deleteStudent(studentUserName);
      this.addStudent({ studentName, newUserName, userId });
    } catch (error) {
      console.log("Appwrite service :: updateStudent :: error ", error);
    }
  }

  async getStudent(studentUserName) {
    try {
      return await this.databases.getDocument(
        conf.databaseId,
        conf.studentId,
        studentUserName
      );
    } catch (error) {
      console.log("Appwrite service :: getStudents :: error ", error);
      return false;
    }
  }

  async listStudents(query) {
    try {
      return await this.databases.listDocuments(
        conf.databaseId,
        conf.studentId,
        [query]
      );
    } catch (error) {
      console.log("Appwrite service :: listStudents :: error ", error);
      return false;
    }
  }
}

const service = new Service();

export default service;
