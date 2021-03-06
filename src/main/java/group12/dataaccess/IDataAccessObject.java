package group12.dataaccess;

import group12.tutorprofile.TutorProfileForm;

import java.util.List;

public interface IDataAccessObject {

    Student getStudentByEmail(String email);

    Tutor getTutorByEmail(String email);

    ActivationCode checkActivationCode(String code);

    Course getCourseByName(String nameCourse);

    List<Course> getAllCourses();

    int getStudentIDByEmail(String email);

    int getTutorIDByEmail(String email);

    int countOfUserWithEmail(String email);

    int countOfUserWithPhone(String phone);

    int countOfUserWithCreditCardNum(String cardNum);

    boolean saveActivationCode(String code);

    boolean saveCourse(Course course);

    boolean saveStudent(Student student);

    boolean saveTutor(Tutor tutor);

    boolean setStudentActivatedStatus(int studentID, boolean status);

    boolean setTutorActivatedStatus(int tutorID, boolean status);

    boolean deleteActivationCodeByValue(String codeValue);

    boolean deleteStudent(int studentID);

    boolean deleteTutor(int tutorID);

    boolean updateStudentPassword(String studentEmail, String newPassword);

    boolean updateTutorPassword(String tutorEmail, String newPassword);

    boolean setCourseToTutor(int tutorId, int courseId, float price);

    List<Course> getCoursesOFTutor(int tutorId);

    int numberOfCourse(String courseName);

    boolean updateStudentEmail(String oldMail, String newMail);

    boolean updateStudentPhone(String email, String newPhone);

    int getStudentActivationStatus(String email);

    TutorProfileForm getTutorProfile(int tutorId);

    String[] getTutorInfo(int tutorId);

    int[] getTutorSchedule(int tutorId);

    boolean saveRating(int tutorId, String rating);

    boolean saveFeedback(String studentEmail, TutorProfileForm tutorProfileForm);

    float calculateAverageRating(int tutorId, String rating);

    boolean increaseTotalRating(int tutorId, float ratingCount);

    boolean getSearchAuthConf();
}
