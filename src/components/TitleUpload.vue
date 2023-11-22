<script setup>

</script>

<template>
    <h1></h1>
    <div class="form-group">
        <label for="title">Title File</label>
        <Field name="title" type="text" class="form-control" v-model="file.title" />
        <ErrorMessage name="title" class="error-feedback text-danger" />
    </div>
    <div class="form-group" >
        <label for="course">Course Name</label>
        <Field name="course" type="text" class="form-control"  v-model="file.course" />
        <ErrorMessage name="course" class="error-feedback text-danger" />
    </div>
</template>
