import { CheckCircleIcon, PaperPlaneTiltIcon } from '@phosphor-icons/react'
import { useMutation } from '@tanstack/react-query'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useId, useState, type FormEvent } from 'react'
import { CONTACT_LIMITS, ContactError, sendContactMessage, type ContactInput } from '@/lib/contact'
import { useLanguage } from '@/providers/language'

type Field = 'name' | 'email' | 'message'
type FieldErrors = Partial<Record<Field, string>>

const EMPTY: ContactInput = { name: '', email: '', message: '', website: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Si el envío tarda más que esto, probablemente la API se está despertando.
const WAKING_HINT_MS = 5000

const inputClass =
  'w-full rounded-xl border border-line bg-surface/60 px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-muted/70 focus:border-gold aria-invalid:border-accent'

export function ContactForm() {
  const { t } = useLanguage()
  const copy = t.contact.form
  const id = useId()
  const [values, setValues] = useState<ContactInput>(EMPTY)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [waking, setWaking] = useState(false)

  const mutation = useMutation({ mutationFn: sendContactMessage })

  useEffect(() => {
    if (!mutation.isPending) return
    const timer = setTimeout(() => setWaking(true), WAKING_HINT_MS)
    return () => {
      clearTimeout(timer)
      setWaking(false)
    }
  }, [mutation.isPending])

  const validate = (input: ContactInput): FieldErrors => {
    const result: FieldErrors = {}
    const name = input.name.trim()
    const message = input.message.trim()
    if (name.length < CONTACT_LIMITS.name[0] || name.length > CONTACT_LIMITS.name[1]) result.name = copy.errors.name
    if (!EMAIL_PATTERN.test(input.email) || input.email.length > CONTACT_LIMITS.email) result.email = copy.errors.email
    if (message.length < CONTACT_LIMITS.message[0] || message.length > CONTACT_LIMITS.message[1])
      result.message = copy.errors.message
    return result
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length === 0) mutation.mutate(values)
  }

  const update = (field: keyof ContactInput) => (event: { target: { value: string } }) => {
    setValues((current) => ({ ...current, [field]: event.target.value }))
    if (field !== 'website') setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const reset = () => {
    setValues(EMPTY)
    setErrors({})
    mutation.reset()
  }

  const errorCode = mutation.error instanceof ContactError ? mutation.error.code : 'network'

  return (
    <div>
      <h2 className="font-display text-3xl font-bold tracking-tighter md:text-4xl">{copy.title}</h2>

      <AnimatePresence mode="wait" initial={false}>
        {mutation.isSuccess ? (
          <motion.div
            key="success"
            role="status"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-8 flex flex-col items-start gap-5 rounded-3xl bg-surface p-7 ring-1 ring-gold/30"
          >
            <CheckCircleIcon size={32} className="text-gold" />
            <p className="text-lg">{copy.success}</p>
            <button
              type="button"
              onClick={reset}
              className="border-b border-ink/30 pb-1 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              {copy.sendAnother}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            noValidate
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            className="mt-8 flex flex-col gap-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor={`${id}-name`} className="text-sm font-medium">
                  {copy.name}
                </label>
                <input
                  id={`${id}-name`}
                  name="name"
                  autoComplete="name"
                  maxLength={CONTACT_LIMITS.name[1]}
                  value={values.name}
                  onChange={update('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${id}-name-error` : undefined}
                  className={inputClass}
                />
                {errors.name && (
                  <p id={`${id}-name-error`} className="text-sm text-accent">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor={`${id}-email`} className="text-sm font-medium">
                  {copy.email}
                </label>
                <input
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={CONTACT_LIMITS.email}
                  value={values.email}
                  onChange={update('email')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${id}-email-error` : undefined}
                  className={inputClass}
                />
                {errors.email && (
                  <p id={`${id}-email-error`} className="text-sm text-accent">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor={`${id}-message`} className="text-sm font-medium">
                {copy.message}
              </label>
              <textarea
                id={`${id}-message`}
                name="message"
                rows={6}
                maxLength={CONTACT_LIMITS.message[1]}
                value={values.message}
                onChange={update('message')}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={`${id}-message-help${errors.message ? ` ${id}-message-error` : ''}`}
                className={`${inputClass} resize-y`}
              />
              <p id={`${id}-message-help`} className="text-xs text-ink-muted">
                {copy.messageHelp} {values.message.trim().length}/{CONTACT_LIMITS.message[1]}
              </p>
              {errors.message && (
                <p id={`${id}-message-error`} className="text-sm text-accent">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Campo trampa: oculto para las personas y los lectores de pantalla. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor={`${id}-website`}>Website</label>
              <input
                id={`${id}-website`}
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={update('website')}
              />
            </div>

            <div className="flex flex-col items-start gap-3">
              <button
                type="submit"
                disabled={mutation.isPending}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-on-accent transition-transform hover:-translate-y-0.5 active:scale-[0.98] disabled:cursor-wait disabled:opacity-70"
              >
                <PaperPlaneTiltIcon size={16} />
                {mutation.isPending ? copy.sending : copy.submit}
              </button>

              <div aria-live="polite" className="text-sm">
                {mutation.isPending && waking && <p className="text-ink-muted">{copy.waking}</p>}
                {mutation.isError && <p className="text-accent">{copy.errors[errorCode]}</p>}
              </div>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
