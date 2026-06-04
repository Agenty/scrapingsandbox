'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Code2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
}

const FormSubmit = () => {
  const [submitted, setSubmitted] = useState<FormData | null>(null);
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Invalid email format';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.category) errs.category = 'Category is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 10)
      errs.message = 'Message must be at least 10 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted({ ...form });
    }
  };

  const handleReset = () => {
    setSubmitted(null);
    setForm({ name: '', email: '', subject: '', category: '', message: '' });
    setErrors({});
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold mb-4">Contact Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4 form-contact">
          <div className="form-field field-name">
            <Label htmlFor="name" className="text-xs font-mono">
              Name
            </Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="John Doe"
              className="mt-1 bg-secondary/50 border-border font-mono text-sm"
            />
            {errors.name && (
              <p className="text-xs text-destructive mt-1 font-mono field-error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="form-field field-email">
            <Label htmlFor="email" className="text-xs font-mono">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              placeholder="john@example.com"
              className="mt-1 bg-secondary/50 border-border font-mono text-sm"
            />
            {errors.email && (
              <p className="text-xs text-destructive mt-1 font-mono field-error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="form-field field-subject">
            <Label htmlFor="subject" className="text-xs font-mono">
              Subject
            </Label>
            <Input
              id="subject"
              value={form.subject}
              onChange={(e) =>
                setForm((f) => ({ ...f, subject: e.target.value }))
              }
              placeholder="Web scraping inquiry"
              className="mt-1 bg-secondary/50 border-border font-mono text-sm"
            />
            {errors.subject && (
              <p className="text-xs text-destructive mt-1 font-mono field-error">
                {errors.subject}
              </p>
            )}
          </div>

          <div className="form-field field-category">
            <Label htmlFor="category" className="text-xs font-mono">
              Category
            </Label>
            <Select
              value={form.category}
              onValueChange={(v) => setForm((f) => ({ ...f, category: v }))}
            >
              <SelectTrigger className="mt-1 bg-secondary/50 border-border font-mono text-sm">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="bug">Bug Report</SelectItem>
                <SelectItem value="feature">Feature Request</SelectItem>
                <SelectItem value="support">Support</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-xs text-destructive mt-1 font-mono field-error">
                {errors.category}
              </p>
            )}
          </div>

          <div className="form-field field-message">
            <Label htmlFor="message" className="text-xs font-mono">
              Message
            </Label>
            <Textarea
              id="message"
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              placeholder="Describe your inquiry..."
              rows={4}
              className="mt-1 bg-secondary/50 border-border font-mono text-sm"
            />
            {errors.message && (
              <p className="text-xs text-destructive mt-1 font-mono field-error">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex gap-3">
            <Button type="submit" className="font-mono btn-submit">
              Submit Form
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleReset}
              className="font-mono btn-reset"
            >
              Reset
            </Button>
          </div>
        </form>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden submitted-panel">
        <div className="px-4 py-3 border-b border-border bg-secondary/50 flex items-center gap-2">
          <Code2 className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-mono text-muted-foreground">
            Submitted Data
          </span>
        </div>
        <div className="p-6">
          {!submitted ? (
            <p className="text-sm font-mono text-muted-foreground text-center py-10 no-submission">
              Submit the form to see the data here.
            </p>
          ) : (
            <div className="space-y-4 submitted-data">
              <div className="flex items-center gap-2 mb-4 submission-status">
                <CheckCircle2 className="h-5 w-5 text-terminal-green" />
                <span className="text-sm font-semibold text-terminal-green font-mono">
                  Form Submitted Successfully
                </span>
              </div>
              <div className="space-y-3">
                {Object.entries(submitted).map(([key, value]) => (
                  <div key={key} className="flex flex-col gap-1 data-field">
                    <span className="field-label text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      {key}
                    </span>
                    <span className="field-value text-sm font-mono text-foreground bg-secondary/50 rounded-md px-3 py-2 border border-border">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-border bg-secondary/30 p-4 raw-json">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  Raw JSON
                </span>
                <pre className="mt-2 text-xs font-mono text-muted-foreground overflow-auto">
                  {JSON.stringify(submitted, null, 2)}
                </pre>
              </div>
              <div className="flex gap-2 mt-2">
                <Badge variant="secondary" className="font-mono text-[10px]">
                  validated
                </Badge>
                <Badge variant="secondary" className="font-mono text-[10px]">
                  client-side
                </Badge>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormSubmit;
