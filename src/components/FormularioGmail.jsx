import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormularioGmail = () => {
  // Definir el esquema de validación con Yup
  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es obligatorio'),
    email: Yup.string().email('Ingresa un correo electrónico válido').required('El correo electrónico es obligatorio'),
    mensaje: Yup.string().required('Deja un mensaje sobre lo tu motivo de contacto'),
  });

  // Inicializar Formik
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      mensaje: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Aquí puedes manejar la lógica de envío de datos, por ejemplo, enviar datos al servidor
      console.log('Datos enviados:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="text-white p-6 rounded-md w-full">
      <div className="mb-4">
        <label htmlFor="nombre" className="text-blue-500 dark:text-green-500 block text-lg font-medium mb-2">Nombre:</label>
        <input
          placeholder='Ingresa tu nombre.'
          type="text"
          id="nombre"
          name="nombre"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nombre}
          className="w-full p-2 bg-gray-700 text-white rounded-md"
        />
        {formik.touched.nombre && formik.errors.nombre ? <div className="text-red-500 text-lg">{formik.errors.nombre}</div> : null}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="text-blue-500 dark:text-green-500 block text-lg font-medium mb-2">Correo Electrónico:</label>
        <input
          placeholder='Ingresa tu correo.'
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="w-full p-2 bg-gray-700 text-white rounded-md"
        />
        {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-lg">{formik.errors.email}</div> : null}
      </div>

      <div className="mb-4">
        <label htmlFor="mensaje" className="text-blue-500 dark:text-green-500 block text-lg font-medium mb-2">Mensaje:</label>
        <textarea
          placeholder='Dejame un mensaje.'
          id="mensaje"
          name="mensaje"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mensaje}
          className="w-full p-2 bg-gray-700 text-white rounded-md"
        />
        {formik.touched.mensaje && formik.errors.mensaje ? <div className="text-red-500 text-lg">{formik.errors.mensaje}</div> : null}
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Enviar</button>
    </form>
  );
};

export default FormularioGmail;
