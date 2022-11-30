const formData = (obj: any, form: any, namespace: any) => {
  const fd = form || new FormData();
  let formKey;

  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (namespace) {
        formKey = namespace + "[" + property + "]";
      } else {
        formKey = property;
      }

      if (
        typeof obj[property] === "object" &&
        !(obj[property] instanceof File)
      ) {
        formData(obj[property], fd, property);
      } else {
        fd.append(formKey, obj[property]);
      }
    }
  }
  return fd;
};

export { formData };

// export let formData = (rawData: any) => {
//   let form = new FormData();
//   Object.keys(rawData).forEach((key) => {
//     if (rawData[key]) {
//       if (typeof rawData[key] === "object") {
//         Object.entries(rawData[key]).forEach(([, value], index) => {
//           if (typeof value === "object") {
//             Object.entries(value).forEach(([_key, _value], _index) => {
//               form.append(`${key}[${_key}][${index}]`, _value);
//             });
//           }
//         });
//       } else {
//         form.append(key, rawData[key]);
//       }
//     }
//   });
//   return form;
// };
