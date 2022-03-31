(()=>{"use strict";var __webpack_modules__={883:()=>{eval("\n;// CONCATENATED MODULE: ./src/forms.ts\nconst formData = (form) => {\n    const inputs = form.querySelectorAll('input');\n    let values = {};\n    inputs.forEach(input => {\n        values[input.id] = input.value;\n    });\n    return values;\n};\n\n;// CONCATENATED MODULE: ./src/index.ts\n\nconst src_form = document.querySelector('form');\nsrc_form.addEventListener('submit', e => {\n    e.preventDefault();\n    const data = formData(src_form);\n    console.log(data);\n});\nconst person = {};\nconsole.log(person.speak());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODgzLmpzIiwibWFwcGluZ3MiOiI7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUNQbUM7QUFDbkMsTUFBTSxRQUFJO0FBQ1YsUUFBSTtBQUNKO0FBQ0EsaUJBQWlCLFFBQVEsQ0FBQyxRQUFJO0FBQzlCO0FBQ0EsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtcHJvamVjdC8uL3NyYy9mb3Jtcy50cz9jY2ViIiwid2VicGFjazovL3dlYnBhY2stdHlwZXNjcmlwdC1wcm9qZWN0Ly4vc3JjL2luZGV4LnRzP2U5NGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZvcm1EYXRhID0gKGZvcm0pID0+IHtcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgbGV0IHZhbHVlcyA9IHt9O1xuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgdmFsdWVzW2lucHV0LmlkXSA9IGlucHV0LnZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZXM7XG59O1xuIiwiaW1wb3J0IHsgZm9ybURhdGEgfSBmcm9tIFwiLi9mb3Jtc1wiO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRhdGEgPSBmb3JtRGF0YShmb3JtKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbn0pO1xuY29uc3QgcGVyc29uID0ge307XG5jb25zb2xlLmxvZyhwZXJzb24uc3BlYWsoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///883\n")}},__webpack_exports__={};__webpack_modules__[883]()})();