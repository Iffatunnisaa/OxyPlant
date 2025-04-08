import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    full_name: vine.string().minLength(3),
    email: vine
      .string()
      .email()
      .unique(async (db, value) => {
        const user = await db.from('users').where('email', value).first()
        return !user
      }),
    password: vine.string().minLength(8).confirmed(),
    password_confirmation: vine.string()
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .email()
      .trim()
      .normalizeEmail(),

    password: vine
      .string()
      .minLength(8)
      .maxLength(32)
  })
)