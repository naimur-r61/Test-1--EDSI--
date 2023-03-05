const form = document.getElementById('contact-form');
const sourceInput = document.getElementById('source');
const pipelineInput = document.getElementById('pipeline');
const projectInput = document.getElementById('project');
const bucketInput = document.getElementById('bucket');
const storageInput = document.getElementById('storage');
const credentialsInput = document.getElementById('credentials');
const runInput = document.getElementById('run');
const formErrors = document.getElementById('form-errors');



form.addEventListener('submit', function (event) {
   event.preventDefault();

   // Reset form errors
   formErrors.innerHTML = '';

   // Get form data
   const source = sourceInput.value.trim();
   const pipeline = pipelineInput.value.trim();
   const project = projectInput.value.trim();
   const bucket = bucketInput.value.trim();
   const storage = storageInput.value.trim();
   const credentials = credentialsInput.value.trim();
   const run = runInput.value.trim();


   // Validate form fields
   let valid = true;

   if (!source || source.length < 5 || !/^[^\s\-+_][A-Za-z0-9]{4,}$/.test(source)) {
      valid = false;
      showError(sourceInput, 'Please enter a valid name (minimum length 5, no special characters, cannot start with -, _, or +)');
   }
   if (!pipeline || pipeline.length < 5 || !/^[^\s\-+_][A-Za-z0-9]{4,}$/.test(pipeline)) {
      valid = false;
      showError(pipelineInput, 'Please enter a valid pipeline name (minimum length 5, no special characters, cannot start with -, _, or +)');
   }
   if (!project || project.length < 5 || !/^[^\s\-+_][A-Za-z0-9]{4,}$/.test(project)) {
      valid = false;
      showError(projectInput, 'Please enter a valid project name (minimum length 5, no special characters, cannot start with -, _, or +)');
   }
   if (!bucket || bucket.length < 5 || !/^[^\s\-+_][A-Za-z0-9]{4,}$/.test(bucket)) {
      valid = false;
      showError(bucketInput, 'Please enter a valid bucket name (minimum length 5, no special characters, cannot start with -, _, or +)');
   }
   if (!storage || storage.length < 5 || !/^[^\s\-+_][A-Za-z0-9]{4,}$/.test(storage)) {
      valid = false;
      showError(storageInput, 'Please enter a valid storage  (minimum length 5, no special characters, cannot start with -, _, or +)');
   }
   if (!credentials || credentials.length < 5 || !/^[^\s\-+_][A-Za-z0-9]{4,}$/.test(credentials)) {
      valid = false;
      showError(credentialsInput, 'Please enter a valid credentials (minimum length 5, no special characters, cannot start with -, _, or +)');
   }
   if (!run || run.length < 5 || !/^[^\s\-+_][A-Za-z0-9]{4,}$/.test(run)) {
      valid = false;
      showError(runInput, 'Please enter a valid run (minimum length 5, no special characters, cannot start with -, _, or +)');
   }






   // Submit form if valid
   if (valid) {
      // Replace this with your own code to submit the form data
      alert('Form submitted successfully!');
      const result = { source, pipeline, project, bucket, storage, credentials, run };
      const formData = JSON.stringify(result);

      localStorage.setItem("formData", formData)
      console.log(result);
      form.reset();
   }
});

function showError(input, message) {
   const error = document.createElement('div');
   error.classList.add('error');
   error.innerText = message;
   input.parentNode.insertBefore(error, input.nextSibling);
}
