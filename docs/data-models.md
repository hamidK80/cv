# Data Models Architecture

## Model Structure
Each data type gets its own class with static data initialization in constructor.

## Model Classes

### 1. PersonalInfo
```typescript
class PersonalInfo {
  name: string;
  title: string;
  phone: string;
  whatsapp: string;
  email: string;
  photo: string;
  story: string;
  experience: number;
  certifications: string[];
}
```

### 2. ServiceInfo
```typescript
class ServiceInfo {
  services: Service[];
  workingHours: WorkingHours;
  serviceArea: string[];
  responseTime: string;
}

class Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  benefit: string;
}
```

### 3. ContactInfo
```typescript
class ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  workingHours: WorkingHours;
  emergencyAvailable: boolean;
}
```

### 4. FAQData
```typescript
class FAQData {
  questions: FAQ[];
  mythBusters: MythBuster[];
}

class FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}
```

### 5. GalleryData
```typescript
class GalleryData {
  beforeAfter: GalleryItem[];
  tools: ToolItem[];
}

class GalleryItem {
  id: string;
  beforeImage: string;
  afterImage: string;
  caption: string;
  service: string;
}
```

### 6. TipsData
```typescript
class TipsData {
  tips: Tip[];
}

class Tip {
  id: string;
  title: string;
  content: string;
  category: string;
}
```

## Usage Pattern
```typescript
// In component
const personalInfo = new PersonalInfo();
const serviceInfo = new ServiceInfo();
const faqData = new FAQData();
```

## Benefits
- **Centralized**: All data in one place per type
- **Type Safe**: Full TypeScript support
- **Easy Updates**: Change data in constructor
- **Reusable**: Same data across components
- **Testable**: Easy to mock for testing
