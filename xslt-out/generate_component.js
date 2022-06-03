let data = document.getElementById("section-to-print");
let body = data.tBodies;
let forms = body[0].children;
let component = [];
console.log("burh");
// Copy component from forms
for (let i = 0; i < forms.length; i++) {
  component[i+1] = forms[i];
}

// Delete Forms
let seleteForm = `<tbody>
<select name="add" id="idk">
<option value="id1">1</option>
<option value="id2">2</option>
<option value="id3">3</option>
<option value="id4">4</option>
<option value="id5">5</option>
<option value="id6">6</option>
</select>`

body[0].innerHTML = seleteForm;

document.getElementById("idk").addEventListener("change", function () {
  let str = this.value.toString();
  let index = str.slice(-1);
  console.log(component[index]);
  body[0].innerHTML = `<tbody></tbody>`;
  body[0].appendChild(component[index])
  body[0].appendChild(seleteForm)
  
});
