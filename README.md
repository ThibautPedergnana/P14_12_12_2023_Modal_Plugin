# A simple Modal React component plugin

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Description

This plusing was publish to https://www.npmjs.com/package/modal-plugin-tp to be reusable.

## Project Prerequisites :

- React >=15.0.1

## How to install :

`npm install modal-plugin-tp`

### How to use :

- Import the component in your file

```javascript
import Modal from "modal-plugin-tp";
```

- Create a state using useState hook

```javascript
const [isOpenModal, setIsOpenModal] = useState();
```

- To make it close by default and open on click you can do like so :

```javascript
{
  isOpenModal && (
    <Modal onClose={() => setIsOpenModal(false)}>
      <div className="success-create">
        Employee has been created successfully !
      </div>
    </Modal>
  );
}
```
