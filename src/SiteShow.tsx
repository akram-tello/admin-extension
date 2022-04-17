import {
  Show,
  SimpleShowLayout,
  TextField,
  UrlField,
  BooleanField,
  ArrayField,
  SingleFieldList,
  ChipField,
  DateField
} from "react-admin";
export const SiteShow = () => (
  <Show>
    <SimpleShowLayout>
      {/* <TextField source="id" /> */}
      <UrlField source="url" />
      <ArrayField source="threats">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <BooleanField source="safe" />
      <DateField label="Created" source="createdAt" />
      <DateField  label="Updated" source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);
