interface MyUser {
  name: string;
  id: number;
  email?: string;
}

type MyUserOptionals = Partial<MyUser>

// interface MyUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
// }

const merge = (user: MyUser, overrides: MyUserOptionals ): MyUser => {
  return {
    ...user,
    ...overrides
  }
}

type RequiredMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, "email" | "name">;

type UserWithoutID = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    }
  }, {})
}

console.log(
  mapById([
    {
      id: 2,
      name: 'Mr. Foo'
    },
    {
      id: 4,
      name: 'Mr. Baz'
    }
  ])
)