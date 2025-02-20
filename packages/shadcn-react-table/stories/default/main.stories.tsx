import { useMemo } from 'react';
import { type Meta } from '@storybook/react';
import { useShadCnReactTable, ShadCnReactTable, type SRT_ColumnDef} from '../../src';
import { faker } from '@faker-js/faker';

const meta: Meta = {
  title: 'Main Storybook',
};

export default meta;

// const data = [...Array(20)].map(() => ({
//     age: faker.number.int({ max: 65, min: 18 }),
//     firstName: faker.person.firstName(),
//     gender: Math.random() < 0.95 ? faker.person.sex() : faker.person.gender(),
//     lastName: faker.person.lastName(),
//     salary: Number(faker.finance.amount({ dec: 0, max: 100000, min: 10000 })),
//     state: faker.location.state(),
//   }));

//   const columns = [
//     {
//         accessorKey: 'firstName',
//         header: 'First Name'
//     }
//   ]

// export const Table = () => (
//     <ShadCnReactTable data={data} columns={columns}/>
// )


//example data type
type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska',
  },
];

export const Example = () => {
  //should be memoized or stable
  const columns = useMemo<SRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name',
        size: 150,
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
        size: 150,
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
      },
    ],
    [],
  );

  const table = useShadCnReactTable({
    columns,
    data,
    // localization: MRT_Localization_ES,
  });

  return <ShadCnReactTable table={table} />;
};