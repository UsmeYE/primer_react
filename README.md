Taller de Conceptos Básicos de React

1.	Componentes UI y Funcionales:
Pregunta 1: ¿Cuál es la diferencia entre un componente UI y un componente funcional en React?
R// El componente UI solo es el diseño de la interfaz gráfica, en cambio, los componentes funcionales tienen toda la parte lógica y funcional de su parte.

2.	Props:
Pregunta 2: ¿Qué son las props en React y cuál es su propósito principal?
R// Los props son datos que se le pasan a un elemento JSX, de un componente padre a un componente hijo.
Su propósito principal es permitir la comunicación entre componentes y la reutilización de los mismos.

3.	Children Props:
Pregunta 3: ¿Qué son los children props en React y por qué no se recomienda su uso excesivo?
R// Son un tipo de prop especial que se utiliza para insertar un componente hijo a un componente padre.
No es recomendable su uso excesivo ya que puede ser difícil de mantener y se vuelve complicado, también por el manejo de su estructura, que puede verse afectada al utilizar y depender tanto de children, se volvería difícil de reutilizar el código.

4.	useState:
Pregunta 4: ¿Qué es useState en React y para qué se utiliza principalmente?
R// useState es un hook que permite añadir un estado a un componente de función.
Se utiliza principalmente para mantener y actualizar datos dinámicos dentro de un componente funcional.