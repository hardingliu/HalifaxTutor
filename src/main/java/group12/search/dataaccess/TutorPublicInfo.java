package group12.search.dataaccess;

public class TutorPublicInfo {
    private int id;
    private String photoURL;
    private String firstName;
    private String lastName;
    private String education;
    private float rating;
    private float pricePerHour;
    private boolean banned;

    public TutorPublicInfo() {
        this.id = 0;
        this.photoURL = "";
        this.firstName = "";
        this.lastName = "";
        this.education = "";
        this.rating = 0.0f;
        this.pricePerHour = 0.0f;
        this.banned = false;
    }

    public TutorPublicInfo(int id, String photoURL, String firstName, String lastName, String education,
                           float rating, float pricePerHour, boolean banned) {
        this.id = id;
        this.photoURL = photoURL;
        this.firstName = firstName;
        this.lastName = lastName;
        this.education = education;
        this.rating = rating;
        this.pricePerHour = pricePerHour;
        this.banned = banned;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setPhotoURL(String photoURL) {
        this.photoURL = photoURL;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public void setPricePerHour(float pricePerHour) {
        this.pricePerHour = pricePerHour;
    }

    public void setBanned(boolean banned) {
        this.banned = banned;
    }

    public int getId() {
        return id;
    }

    public String getPhotoURL() {
        return photoURL;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEducation() {
        return education;
    }

    public float getRating() {
        return rating;
    }

    public float getPricePerHour() {
        return pricePerHour;
    }

    public boolean isBanned() {
        return banned;
    }

    @Override
    public String toString() {
        return "id: " + id + " photoURL: " + photoURL + " firstName: " + firstName + " lastName: " + lastName
                + " education: " + education + " rating: " + rating + " pricePerHour" + pricePerHour;
    }
}
