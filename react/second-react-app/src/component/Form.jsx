function Form(){
    return(
       
<div>
 <div class="form-box">
            <h2>Form</h2>

            <label>Name</label>
            <input type="text" class="y" placeholder="Enter name"/>
            <br></br>
            <label>Roll No</label>
            <input type="number" class="y" placeholder="Enter roll no"/>
<br></br>
            <label>Age</label>
            <select class="y">
                <option>Select age</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
            </select>
<br></br>
            <label>Gender</label>
            <div class="inline">
                <input type="radio" name="gender"/> Male
                <input type="radio" name="gender"/> Female
            </div>

            <label>Skills</label>
            <div class="inline">
                <input type="checkbox"/> HTML
                <input type="checkbox"/> CSS
                <input type="checkbox"/> JavaScript
            </div>

            <label>Course</label>
            <select class="y">
                <option>Select course</option>
                <option>CSE</option>
                <option>IT</option>
                <option>AI</option>
                <option>DS</option>
            </select>
<br></br>
            <button>Submit</button>
        </div>
    
             
         
</div>

    )
}
export default Form;