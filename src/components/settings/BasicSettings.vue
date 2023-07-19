<template>
  <div class="flex flex-col gap-4 mt-4">
    <SettingsField
      field-key="firstName"
      field-label="Vorname"
      field-name="updateFirstName"
      field-type="text"
    />
    <SettingsField
      field-key="lastName"
      field-label="Nachname"
      field-name="updateLastName"
      field-type="text"
    />
    <SettingsField
      field-key="description"
      field-label="Über mich"
      field-name="updateDescription"
      field-type="text"
    />

    <small class="text-secondary font-thin"
      >E-Mail: {{ userStore.user.email }}</small
    >
  </div>
</template>

<script setup>
import SettingsField from "@/components/settings/SettingsField.vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>
