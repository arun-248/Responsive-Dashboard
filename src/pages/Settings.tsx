import { useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../hooks"
import { setTheme } from "../slices/themeSlice"

type FormValues = {
  name: string
  email: string
  notifications: boolean
  theme: "light" | "dark"
}

export default function Settings() {
  const dispatch = useAppDispatch()
  const mode = useAppSelector((s) => s.theme.mode)

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      notifications: true,
      theme: mode
    }
  })

  const onSubmit = (data: FormValues) => {
    dispatch(setTheme(data.theme))
    alert("Preferences updated!")
  }

  return (
    <div className="max-w-xl space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full rounded-lg border px-3 py-2 dark:bg-gray-700 dark:border-gray-600"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full rounded-lg border px-3 py-2 dark:bg-gray-700 dark:border-gray-600"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("notifications")} />
          <span>Enable Notifications</span>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Theme</label>
          <select
            {...register("theme")}
            className="w-full rounded-lg border px-3 py-2 dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-blue-600 text-white"
        >
          Save
        </button>
      </form>
    </div>
  )
}
