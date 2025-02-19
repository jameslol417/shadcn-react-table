import { type Meta } from '@storybook/react';
import { ShadCnReactTable } from '../../src/components/ShadCnReactTable';
import { faker } from '@faker-js/faker';

const meta: Meta = {
  title: 'Main Storybook',
};

export default meta;

const data = [...Array(20)].map(() => ({
    age: faker.number.int({ max: 65, min: 18 }),
    firstName: faker.person.firstName(),
    gender: Math.random() < 0.95 ? faker.person.sex() : faker.person.gender(),
    lastName: faker.person.lastName(),
    salary: Number(faker.finance.amount({ dec: 0, max: 100000, min: 10000 })),
    state: faker.location.state(),
  }));

  const columns = [
    {
        accessorKey: 'firstName',
        header: 'First Name'
    }
  ]

export const Table = () => (
    <ShadCnReactTable data={data} columns={columns}/>
)