package group12.data_access;

public class MysqlDAOImpl implements IDataAccessObject{
    @Override
    public Student getStudentByEmail(String email) {
        SQLOperationTemplate op = new GetStudentSQLOperation(email);
        return (Student) op.executeMysqlQuery();
    }

    @Override
    public Tutor getTutorByEmail(String email) {
        SQLOperationTemplate op = new GetTutorSQLOperation(email);
        return (Tutor) op.executeMysqlQuery();
    }

    @Override
    public Admin getAdminByEmail(String email) {
        SQLOperationTemplate op = new GetAdminSQLOperation(email);
        return (Admin) op.executeMysqlQuery();
    }

    @Override
    public int getStudentIDByEmail(String email) {
        return 0;
    }

    @Override
    public int getTutorIDByEmail(String email) {
        return 0;
    }

    @Override
    public int countOfUserWithEmail(String email) {
        return 0;
    }

    @Override
    public int countOfUserWithPhone(String phone) {
        return 0;
    }

    @Override
    public int countOfUserWithCreditCardNum(String cardNum) {
        return 0;
    }

    @Override
    public int countOfActivationCodeWithValue(String codeValue) {
        return 0;
    }

    @Override
    public boolean saveActivationCode(String code) {
        return false;
    }

    @Override
    public boolean saveStudent(Student student) {
        return false;
    }

    @Override
    public boolean saveTutor(Tutor tutor) {
        return false;
    }

    @Override
    public boolean setStudentActivatedStatus(int studentID, boolean status) {
        return false;
    }

    @Override
    public boolean setTutorActivatedStatus(int tutorID, boolean status) {
        return false;
    }

    @Override
    public boolean setActivatedStatusByEmail(String email, boolean status) {
        return false;
    }

    @Override
    public boolean setStudentBannedStatus(int studentID, boolean status) {
        return false;
    }

    @Override
    public boolean setTutorBannedStatus(int tutorID, boolean status) {
        return false;
    }

    @Override
    public boolean setBannedStatusByEmail(String email, boolean status) {
        return false;
    }

    @Override
    public boolean deleteActivationCodeByValue(String codeValue) {
        return false;
    }
}