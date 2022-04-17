import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  ArrayInput,
  SimpleFormIterator,
  useInput,
  useDataProvider,
  SaveButton,
  Button,
  Toolbar
} from "react-admin";



export const SiteCreate = (props: any) => {


  return (
    <Create
    
    {...props}
    >
      <SimpleForm>
        <TextInput source="url" />
        {/* <TextInput source="id" /> */}
        <BooleanInput source="safe" />
        <ArrayInput source="threats">
          <SimpleFormIterator>
            <TextInput label={"Threat Type"} source="name" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>


    </Create>
  );
};
