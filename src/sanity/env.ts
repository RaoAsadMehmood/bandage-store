export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skraeehz8jmM3WeFDbWnu1AjJ8U30XkSy3vWOmlHmWtO2tok2UIz4xU8W680tqsCzbHuRnR9zjir9zk6RpJzXPEqsocibLywh85Q1SAlDmkyyTnFMZuzsBU3wj6taieoLhtAUa7sU1UEjKkFm4TaVYOGATFW6wiGFeLa9qmffLq5OY37XFEN",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_TOKEN'
)


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
