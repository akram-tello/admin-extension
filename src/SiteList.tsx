import {
  List,
  Datagrid,
  TextField,
  UrlField,
  BooleanField,
  ArrayField,
  SingleFieldList,
  ChipField,
  DateField,
} from "react-admin";

export const SiteList = () => (
  <List>
    <Datagrid rowClick="show" key={Date.now()}>
      {/* <TextField source="id" /> */}
      <UrlField source="url" />
      <ArrayField source="threats">
    <SingleFieldList key={Date.now()+"sg"}>
        <ChipField source="name" />
    </SingleFieldList>
</ArrayField>
      <BooleanField source="safe" />
      <DateField label="Created" source="createdAt" />
      <DateField  label="Updated" source="updatedAt" />
    </Datagrid>
  </List>
);
