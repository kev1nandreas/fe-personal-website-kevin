interface Link {
  slug: string;
  destination: string;
  expires_at: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function typecastLink(data: any): Link[] | undefined {
    return data as Link[] | undefined;
  }
